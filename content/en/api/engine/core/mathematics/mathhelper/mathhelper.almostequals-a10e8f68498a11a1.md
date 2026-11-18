---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a10e8f68498a11a1d997df426780b27cae1c71cc366b8be0f895ffa51103f65c
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.AlmostEquals(System.Single,System.Single,System.Single)
title: MathHelper.AlmostEquals
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
sourceFingerprint: 0b98aa4706a2569b9857666a30e328ebe24390796ac0bbc684412816aa0f2e13
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `a`:** The first float value to compare.

**Parameter `b`:** The second float value to compare.

**Parameter `relTolerance`:** The relative tolerance allowed between `a` and `b`. Default is 1e-6. The comparison checks if the difference is within `relTolerance * max(|a|, |b|)`.

## Returns

`true` if the absolute difference between `a` and `b` is less than or equal to the relative tolerance multiplied by the larger magnitude of the two values; otherwise, `false`.
