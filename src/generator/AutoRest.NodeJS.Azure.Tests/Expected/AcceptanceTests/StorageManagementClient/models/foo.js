/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the Foo class.
 * @constructor
 * The URIs that are used to perform a retrieval of a public blob, queue or
 * table object.
 *
 * @member {object} [barPoint] Bar point
 *
 * @member {object} [barPoint.recursivePoint] Recursive Endpoints
 *
 * @member {string} [barPoint.recursivePoint.blob] Gets the blob endpoint.
 *
 * @member {string} [barPoint.recursivePoint.queue] Gets the queue endpoint.
 *
 * @member {string} [barPoint.recursivePoint.table] Gets the table endpoint.
 *
 * @member {object} [barPoint.recursivePoint.dummyEndPoint] Dummy EndPoint
 *
 * @member {object} [barPoint.recursivePoint.fooPoint] Foo point
 *
 */
function Foo() {
}

/**
 * Defines the metadata of Foo
 *
 * @returns {object} metadata of Foo
 *
 */
Foo.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Foo',
    type: {
      name: 'Composite',
      className: 'Foo',
      modelProperties: {
        barPoint: {
          required: false,
          serializedName: 'Bar\\.Point',
          type: {
            name: 'Composite',
            className: 'Bar'
          }
        }
      }
    }
  };
};

module.exports = Foo;
