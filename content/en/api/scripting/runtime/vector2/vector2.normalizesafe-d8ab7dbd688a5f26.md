---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d8ab7dbd688a5f261d98ddd6a3f80b8c70efaad2b3442db727047c3993b4a608
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Vector2.NormalizeSafe(InnoEngine.Mathematics.Vector2,System.Single)
title: Vector2.NormalizeSafe
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
reviewed: f38172c457974674ccc2cbe73e047531ed947be004bd85c8bc342943c9dc1ee0
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Returns a unit-length value while handling degenerate input according to the method contract.

## Parameters

**Parameter `value`:** The concrete value read or transformed by this operation.

**Parameter `epsilon`:** The positive tolerance below which input is treated as degenerate.

## Returns

The validated vector2 that represents the completed operation.
