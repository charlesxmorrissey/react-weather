import DarkSkyAPIWrapper from '@/api'
import { getNavigatorCoords } from 'geo-loc-utils'

const config = {
  acceptedLanguage: ['en'],
  errorMessage: {
    noApiKeyOrProxy: 'No Dark Sky api key set and no proxy url set',
  },
  excludes: ['alerts', 'currently', 'daily', 'flags', 'hourly', 'minutely'],
  warningMessage: {
    invalidLanguage: 'not an accepted API lanugage.',
  },
}

class DarkSkyApi {
  /**
   * @param {string} apiKey - dark sky api key - consider using a proxy
   * @param {string|boolean} proxy - make request behind proxy to hide
   *  api key or set to true to indicate caller is server-side
   * @param {string} units
   * @param {string} language
   * @param {func} processor
   */
  constructor(apiKey, proxy, language) {
    this.darkSkyApi = new DarkSkyAPIWrapper(apiKey, proxy)
    this._language = language || 'en'
  }

  /**
   * Initialze dark sky api with position data - Chainable
   * @param {object} position - containing geo latitude and longitude
   * @see DarkSkyApi.getNavigatorCoords
   */
  initialize(position) {
    this.position(position)
    this.initialized = true

    return this
  }

  /**
   * Set dark sky api position data - Chainable
   * @param {object} position - containing geo latitude and longitude
   */
  position({ latitude, longitude }) {
    this.darkSkyApi.latitude(latitude).longitude(longitude)
    this.initialized = true

    return this
  }

  /**
   * Set language for response summaries
   * @param {String} value - language token
   */
  language(value) {
    if (config.acceptedLanguage.indexOf(value) === -1) {
      console.warn(`${value} ${config.warningMessage.invalidLanguage}`)
    } else {
      value = value ? (this._language = value) : null
    }

    return this
  }

  /**
   * Get forecasted week of weather
   * @param {object} [position] - if omitted will use loadPosition
   */
  loadCurrent(position) {
    if (position) {
      this.position(position)
    } else if (!this.initialized) {
      return this.loadPosition().then((position) =>
        this.initialize(position).loadCurrent()
      )
    }

    return this.darkSkyApi
      .language(this._language)
      .exclude(config.excludes.filter((val) => val !== 'currently').join(','))
      .get()
      .then(({ currently }) => this.processWeatherItem(currently))
  }

  /**
   * Make response a bit more friendly
   * @param {object} item - item to process
   */
  processWeatherItem(item) {
    return item
  }

  /**
   *  Get browser navigator coords - Promise
   */
  loadPosition(options = {}) {
    return DarkSkyApi.loadPosition(options)
  }

  static _api

  // allow config and deferring of initialization
  static apiKey
  static proxy
  static units
  static language
  static postProcessor

  /**
   *  Get browser navigator coords - Promise
   */
  static loadPosition = (options = {}) => getNavigatorCoords(options)

  /**
   * Initialize a static instance of weather api with dark sky api key
   * @param {string} apiKey
   * @param {string|boolean} proxy
   */
  static initialize(apiKey, proxy, units, language, postProcessor) {
    if (this._api) {
      return
    }

    if (!this.apiKey && !this.proxy && !apiKey && !proxy) {
      throw new Error(config.errorMessage.noApiKeyOrProxy)
    }

    const key = apiKey || this.apiKey || ''
    const proxyService = proxy || this.proxy || ''
    const unit = units || this.units || ''
    const lang = language || this.language || ''
    const processor = postProcessor || this.postProcessor || null

    this._api = new DarkSkyApi(key, proxyService, unit, lang, processor)
  }

  /**
   * Set language for response summaries - initialize or configure
   *  with api key or proxy first
   * @param {String} value - language token
   */
  static setLanguage(language) {
    this.initialize()
    this._api.language(language)
  }

  /**
   * Get today's weather - Promise
   * @param {object} position - if omitted will use loadPosition
   */
  static loadCurrent(position) {
    this.initialize()

    if (position) {
      return this._api.position(position).loadCurrent()
    } else {
      return this._api.loadCurrent()
    }
  }
}

export default DarkSkyApi
