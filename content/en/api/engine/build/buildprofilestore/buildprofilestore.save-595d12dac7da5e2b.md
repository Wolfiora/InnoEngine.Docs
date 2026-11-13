---
uid: api.595d12dac7da5e2b6970229271051869e39040a59b11c56321f13cf2a675d97a
symbol: "engine:Inno.Build:M:Inno.Build.BuildProfileStore.Save(Inno.Build.BuildProfile)"
source: xml
reviewed: 5c1e5526538598d9d364a6515c5c68501992eedab89441a8959e2534d0d2a7e5
title: "BuildProfileStore.Save"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Validates and atomically saves the supplied build profile.

**Parameter `profile`:** The complete current profile to persist.

**Exception `T:System.ArgumentNullException`:** Thrown when `profile` is `null`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the profile cannot produce a supported Player deployment.

**Exception `T:System.IO.IOException`:** Thrown when the candidate document cannot be written or atomically installed.
