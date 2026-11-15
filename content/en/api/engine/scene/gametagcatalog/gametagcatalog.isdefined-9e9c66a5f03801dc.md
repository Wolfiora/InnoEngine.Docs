---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9e9c66a5f03801dc9aeaa64cc5fb8710ac104365d7f8121694119388e76bb167
symbol: engine:Inno.Scene:M:Inno.Scene.GameTagCatalog.IsDefined(System.String)
title: GameTagCatalog.IsDefined
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: f50285cc517f37f2547bee84b4b820ee7888d732f367c34b06891f4ac0d817e6

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Determines whether an ordinal tag is defined by the project.

## Parameters

**Parameter `tag`:** The tag to resolve.

## Returns

`true` when the normalized tag is defined.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or invalid.
