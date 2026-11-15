---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.07d193e637ccd70207b312ecaa85f2227dd79a391945e0bbf4d160b4f00e46fa
symbol: engine:Inno.Scene:M:Inno.Scene.GameTagCatalog.Remove(System.String)
title: GameTagCatalog.Remove
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 11fa3518acd6afdd3ebec6afb0a764d26384b9b11399ec741b2ffc9d880b0ee1

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Removes one custom project tag definition without rewriting scene assignments.

## Parameters

**Parameter `tag`:** The custom tag to remove.

## Returns

`true` when an existing definition was removed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or invalid.
