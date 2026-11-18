---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.23b8a456b702e86c27645a9a0b8e4d00d771142990d82b98eb47c311f20fa191
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuContext.#ctor(Inno.Editor.Core.EditorContext,Inno.Editor.Interactions.EditorInteractions,System.String,System.Object)
title: EditorMenuContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 1e095428d9ea321f25d4bdf70899310dc0c2c332e2c4156923eeb651e89ae45d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The exact menu area being requested.

**Parameter `target`:** The optional object the menu operates on.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor` or `interactions` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
