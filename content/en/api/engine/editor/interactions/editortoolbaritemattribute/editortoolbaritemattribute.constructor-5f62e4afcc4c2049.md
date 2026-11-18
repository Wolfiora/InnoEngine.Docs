---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5f62e4afcc4c20491a87143b2735209e65b3145e4ba613feb9989c223fd07ce4
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorToolbarItemAttribute.#ctor(System.String,Inno.Editor.Interactions.EditorToolbarIcon,System.String,System.Int32,Inno.Editor.Interactions.EditorToolbarIcon)
title: EditorToolbarItemAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 521aae3ed9d1630511445209bc53776616958afd33b8f0c94b42b04e0655465e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `area`:** The exact interaction area whose toolbar receives the action.

**Parameter `icon`:** The symbol shown while the action is not checked.

**Parameter `tooltip`:** The fallback tooltip shown when the action has no contextual display name.

**Parameter `order`:** The stable ordering value within the toolbar.

**Parameter `activeIcon`:** The symbol shown while the action is checked, or `F:Inno.Editor.Interactions.EditorToolbarIcon.None` to retain `icon`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `area` or `tooltip` is empty, or when `icon` is `F:Inno.Editor.Interactions.EditorToolbarIcon.None`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when an icon value is not defined.
