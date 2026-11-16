---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.115c09a2ab2a7ac2c90753c7a0a32dff6aa86689592c532392f23c441bcff3b1
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.Lerp(System.Single,System.Single,System.Single)
title: MathHelper.Lerp
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
reviewed: ddf7f4d3a5fc6c1fb32fedf275600099b983e1151238b2774d05d85708fdc321
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value1`:** Source value.

**Parameter `value2`:** Destination value.

**Parameter `amount`:** Value between 0 and 1 indicating the weight of value2.

## Returns

Interpolated value.

## Remarks

This method performs the linear interpolation based on the following formula: `value1 + (value2 - value1) * amount` Passing amount a value of 0 will cause value1 to be returned, a value of 1 will cause value2 to be returned. See `M:MathHelper.LerpPrecise(System.Single,System.Single,System.Single)` for a less efficient version with more precision around edge cases.
