/**
 * Tests bundle for webpack context
 *
 * Created by Tommy on 12/16/15.
 */

var context = require.context('.', true, /.+\.test\.jsx?$/);
context.keys().forEach(context);
module.exports = context;