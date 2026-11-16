---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2ad9258d0f7638fb1fc950d6497f1777e32a409021867bce478dfeb469b56ac9
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single)
title: EditorPlanarNavigation.WheelFactor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: b85824e1d7a666ae5464779dc38a3c617fd0e561121bbed364b12b6d02ef6d3a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `wheel`:** Logical wheel units, independent of framebuffer DPI.

**Parameter `sensitivity`:** Positive exponential sensitivity.

## Returns

A finite positive magnification factor; positive wheel magnifies content.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Input is non-finite or sensitivity is not positive.
