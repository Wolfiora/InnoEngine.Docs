---
uid: api.36bf6dd28b2b59d42ef0b9fa073c02bb56cb84caa1a33461539ce78ff77f8769
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.ValidateMatches(Inno.Runtime.GameCodeDeployment)"
source: xml
reviewed: c426372515d9e19ebee975fba093693c0325530597702a6b72f84ae8d4ba717c
title: "ValidateMatches"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Rejects a manifest that differs from the code closure linked by the build.

**Parameter `expected`:** The independently frozen deployment to compare with this closure.

**Exception `T:System.IO.InvalidDataException`:** Module ordering, ownership, dependencies, code names or fingerprints differ.
