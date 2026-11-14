---
uid: api.44d25a8c532d9220e3859e6680828ddbb7419b287ebce95ff7a91a07859e0979
symbol: "scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Zero(InnoEditor.Rendering.Shaders.ShaderSourceType)"
source: xml
reviewed: 032d79d8886eeba0dd7971b255529187ca49960bdaa4aeea4c33c621e1ae5114
title: "ShaderGraphLiteral.Zero"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Creates an explicit zero value for a supported scalar, vector, matrix, structure or array.

## Parameters

**Parameter `type`:** Complete numeric or boolean value type; resources and effect tokens are not values.

## Returns

A detached zero literal with an exact type and component count.

## Exceptions

**Exception `T:System.NotSupportedException`:** The type is opaque or exceeds the bounded literal size.
