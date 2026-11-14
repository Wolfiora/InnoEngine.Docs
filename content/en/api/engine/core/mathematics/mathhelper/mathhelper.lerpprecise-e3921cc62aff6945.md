---
uid: api.e3921cc62aff694596dde5bcd75ba99686ff24c273f89933f0c6bc18f516d96a
symbol: "engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.MathHelper.LerpPrecise(System.Single,System.Single,System.Single)"
source: xml
reviewed: 9bf0f58bbd1228a568d2c69127a89cd6f42b1a39b09e06e12b4fabcc81b7c5be
title: "MathHelper.LerpPrecise"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: source-clr
---

Linearly interpolates between two values. This method is a less efficient, more precise version of `M:MathHelper.Lerp(System.Single,System.Single,System.Single)`. See remarks for more info.

**Parameter `value1`:** Source value.

**Parameter `value2`:** Destination value.

**Parameter `amount`:** Value between 0 and 1 indicating the weight of value2.

**Returns:** Interpolated value.

## Remarks

This method performs the linear interpolation based on the following formula: `((1 - amount) * value1) + (value2 * amount)`. Passing amount a value of 0 will cause value1 to be returned, a value of 1 will cause value2 to be returned. This method does not have the floating point precision issue that `M:MathHelper.Lerp(System.Single,System.Single,System.Single)` has. i.e. If there is a big gap between value1 and value2 in magnitude (e.g. value1=10000000000000000, value2=1), right at the edge of the interpolation range (amount=1), `M:MathHelper.Lerp(System.Single,System.Single,System.Single)` will return 0 (whereas it should return 1). This also holds for value1=10^17, value2=10; value1=10^18,value2=10^2... so on. For an in depth explanation of the issue, see below references: Relevant Wikipedia Article: https://en.wikipedia.org/wiki/Linear\_interpolation#Programming\_language\_support Relevant StackOverflow Answer: http://stackoverflow.com/questions/4353525/floating-point-linear-interpolation#answer-23716956
