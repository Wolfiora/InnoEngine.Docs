---
uid: api.e094d84ed50b8eafc722d4e3f9758a222c17c4f8e50f11995005b20badedad4a
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.MathHelper.Lerp(System.Single,System.Single,System.Single)"
source: xml
reviewed: a350461a2db98f93eab5454e4e13689c812af8ac6662e3039fcb10407ab6558f
title: "Lerp"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Linearly interpolates between two values.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Destination value.

**Parameter `amount`:** Value between 0 and 1 indicating the weight of value2.

**Returns:** Interpolated value.

## Remarks

This method performs the linear interpolation based on the following formula: `value1 + (value2 - value1) * amount` Passing amount a value of 0 will cause value1 to be returned, a value of 1 will cause value2 to be returned. See `M:MathHelper.LerpPrecise(System.Single,System.Single,System.Single)` for a less efficient version with more precision around edge cases.
