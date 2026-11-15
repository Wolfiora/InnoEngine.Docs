---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.44d25a8c532d9220e3859e6680828ddbb7419b287ebce95ff7a91a07859e0979
symbol: scripting:Inno.Rendering.Shaders:M:InnoEditor.Rendering.Shaders.ShaderGraphLiteral.Zero(InnoEditor.Rendering.Shaders.ShaderSourceType)
title: ShaderGraphLiteral.Zero
kind: api
owners:
- Inno.Rendering.Shaders
apiSurface: editor-script
reviewed: 032d79d8886eeba0dd7971b255529187ca49960bdaa4aeea4c33c621e1ae5114
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `type`:** Complete numeric or boolean value type; resources and effect tokens are not values.

## Returns

A detached zero literal with an exact type and component count.

## Exceptions

**Exception `T:System.NotSupportedException`:** The type is opaque or exceeds the bounded literal size.
