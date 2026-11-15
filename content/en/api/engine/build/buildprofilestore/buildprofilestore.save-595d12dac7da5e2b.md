---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.595d12dac7da5e2b6970229271051869e39040a59b11c56321f13cf2a675d97a
symbol: engine:Inno.Build:M:Inno.Build.BuildProfileStore.Save(Inno.Build.BuildProfile)
title: BuildProfileStore.Save
kind: api
owners:
- Inno.Build
apiSurface: source-clr
reviewed: 5c1e5526538598d9d364a6515c5c68501992eedab89441a8959e2534d0d2a7e5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `profile`:** The complete current profile to persist.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `profile` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the profile cannot produce a supported Player deployment.

**Exception `T:System.IO.IOException`:** Thrown when the candidate document cannot be written or atomically installed.
