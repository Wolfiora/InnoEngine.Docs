---
uid: api.47d09ad5c012fb540edaac3e008f091d8e7ead749256b8642f8998b9b1ee3a91
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderGraphLiteral.Zero(Inno.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: de320cffd2c88b721646a282c1ff1b76eab9b8c2241253d1918a1cdcb5fe70e0
title: "ShaderGraphLiteral.Zero"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Creates an explicit zero value for a supported scalar, vector, matrix, structure or array.

**Parameter `type`:** Complete numeric or boolean value type; resources and effect tokens are not values.

**Returns:** A detached zero literal with an exact type and component count.

**Exception `T:System.NotSupportedException`:** The type is opaque or exceeds the bounded literal size.
