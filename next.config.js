const { withContentlayer } = require('next-contentlayer')
const withTM = require('next-transpile-modules')(['@effect-ts/otel', '@opentelemetry/sdk-trace-base']);

const nextConfig = {};

module.exports = withTM(withContentlayer(nextConfig));
