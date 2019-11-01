import React from 'react'
import { navigate } from 'gatsby'
import versionHelper from '../../lib/versionHelper'

const {
  docs, docs: {current, versions}
} = require('../../../config')

versions.unshift(current)

const doChange = (e, location, currentVersion) => {
  const targetVersion = versionHelper.getPrefixedVersion(e.target.value)

  if (current === targetVersion) {
    const path = location.pathname.replace(currentVersion, '')
    // noinspection JSIgnoredPromiseFromCall
    navigate(path)
    return
  }

  if (currentVersion === '') {
    const path = location.pathname.replace('docs/', `docs/${targetVersion}/`)
    // noinspection JSIgnoredPromiseFromCall
    navigate(path)
    return
  }

  const path = location.pathname.replace(currentVersion, `${targetVersion}/`)
  // noinspection JSIgnoredPromiseFromCall
  navigate(path)
}

export default ({ location, currentVersion }) => (
  <select
    onChange={e => doChange(e, location, currentVersion)}
    value={currentVersion === '' ? current : currentVersion.slice(0, -1)}
  >
    {versions.map(version => {
      const formattedVersion = versionHelper.getPrefixedVersion(version)
      const correspondingVersion = docs[`${version}Version`]
      return (
        <option key={formattedVersion} value={formattedVersion}>
          {(
            formattedVersion +
            (correspondingVersion
              ? ` (${versionHelper.getPrefixedVersion(correspondingVersion)})`
              : '')
          ).toUpperCase()}
        </option>
      )
    })}
  </select>
)
