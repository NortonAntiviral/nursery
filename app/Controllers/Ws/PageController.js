'use strict'

class PageController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = PageController
