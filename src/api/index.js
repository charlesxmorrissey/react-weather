import fetchJsonp from 'fetch-jsonp'
import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

class DarkSkyAPIWrapper {
  constructor(apiKey, proxy) {
    this.apiKey = apiKey || ''
    this.apiURL = 'https://api.darksky.net/forecast'
    this.proxy = proxy || ''
    this.query = {}
    this._longitude = null
    this._latitude = null
    this._time = null
  }

  longitude(long) {
    long = long ? (this._longitude = long) : null

    return this
  }

  latitude(lat) {
    lat = lat ? (this._latitude = lat) : null

    return this
  }

  /**
   * @param {string} time - 'YYYY-MM-DDTHH:mm:ss'
   */
  time(time) {
    this._time = time

    return this
  }

  units(unit) {
    unit = unit ? (this.query.units = unit) : null

    return this
  }

  language(lang) {
    lang = lang ? (this.query.lang = lang) : null

    return this
  }

  exclude(blocks) {
    this.query.exclude = blocks

    return this
  }

  // not on currently requests
  extendHourly(param) {
    if (!param) {
      this.query.extend = 'hourly'
    } else {
      if (this.query.hasOwnProperty('extend')) {
        delete this.query.extend
      }
    }

    return this
  }

  generateReqUrl() {
    const baseUrl =
      this.proxy && this.proxy !== true
        ? this.proxy
        : `${this.apiURL}/${this.apiKey}`

    console.log('baseUrl::', baseUrl)

    this.url = `${baseUrl}/${this._latitude},${this._longitude}`
    this._time = this._time ? (this.url += `,${this._time}`) : this.url
    this.query = !this.isEmpty(this.query)
      ? (this.url += `?${queryString.stringify(this.query)}`)
      : this.url
  }

  get() {
    if (!this._latitude || !this._longitude) {
      return new Promise((resolve, reject) => {
        reject(
          new Error(
            'Request not sent. ERROR: Longitute or Latitude is missing.'
          )
        )
      })
    }

    this.generateReqUrl()

    const query = this.proxy ? fetch(this.url) : fetchJsonp(this.url)

    return query
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => error)
  }

  isEmpty(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false
      }
    }

    return true
  }
}

export default DarkSkyAPIWrapper
