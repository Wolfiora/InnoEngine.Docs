---
uid: api.36bf6dd28b2b59d42ef0b9fa073c02bb56cb84caa1a33461539ce78ff77f8769
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameCodeDeployment.ValidateMatches(Inno.Runtime.GameCodeDeployment)"
source: xml
reviewed: ad5d9f2d810b9829ce770eacc91d6a428a3862dd0bb631eaa8191b0f3326df37
title: "GameCodeDeployment.ValidateMatches"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Rejects a manifest that differs from the code closure linked by the build.

## Parameters

**Parameter `expected`:** The independently frozen deployment to compare with this closure.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Module ordering, ownership, dependencies, code names or fingerprints differ.
