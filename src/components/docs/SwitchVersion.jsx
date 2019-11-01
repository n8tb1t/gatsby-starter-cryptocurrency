import React from 'react'
import { navigate } from 'gatsby'
import constants, { current, versions } from '../../../constants'
import versionHelper from '../../lib/versionHelper'

versions.unshift(current)

const doChange = (e, location, currentVersion) => {
  const targetVersion = versionHelper.getPrefixedVersion(e.target.value)

  if (current === targetVersion) {
    const path = location.pathname.replace(currentVersion, '')
    navigate(path)
    return
  }

  if (currentVersion === '') {
    const path = location.pathname.replace('docs/', `docs/${targetVersion}/`)
    navigate(path)
    return
  }

  const path = location.pathname.replace(currentVersion, `${targetVersion}/`)
  navigate(path)
}

export default ({ location, currentVersion }) => (
  <select
    onChange={e => doChange(e, location, currentVersion)}
    value={currentVersion === '' ? current : currentVersion.slice(0, -1)}
  >
    {versions.map(version => {
      const formattedVersion = versionHelper.getPrefixedVersion(version)
      const correspondingVersion = constants[`${version}Version`]
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
