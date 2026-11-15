---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e624fde06eaa654fda3650e82a52163622660d64c600289040b0faffcd8fe222
symbol: engine:Inno.Scene:M:Inno.Scene.GameScene.FindObjectWithTag(System.String)
title: GameScene.FindObjectWithTag
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 12fa365beae4221cd99d14c54a84b73120416c2e99617e12a69bae878f017afd

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Finds the first game object with an ordinally matching tag in scene storage order.

## Parameters

**Parameter `tag`:** Tag to find.

## Returns

The first match, or `null` when no object matches.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
