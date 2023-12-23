const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let maxDomainLevel = 0;
  const result = {};
  const domainMatrix = domains.map((domain) => {
    const reversedDomain = domain.split(".").reverse();
    if (reversedDomain.length > maxDomainLevel) {
      maxDomainLevel = reversedDomain.length;
    }
    return reversedDomain;
  });

  for (let domainLevel = 0; domainLevel < maxDomainLevel; domainLevel++) {
    domainMatrix.forEach((domain) => {
      if (domainLevel < domain.length) {
        let key = `.${domain.slice(0, domainLevel + 1).join(".")}`;
        if (result.hasOwnProperty(key)) {
          result[key] += 1;
        } else {
          result[key] = 1;
        }
      }
    });
  }
  return result;
}

module.exports = {
  getDNSStats,
};
