---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ace1a1bf5b59b8664178cd987ad4d60f0557702393aeadace4411bf7ede1bf1e
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorPlanarNavigation.WheelFactor(System.Single,System.Single)
title: EditorPlanarNavigation.WheelFactor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 302fd542597ae92172d032acb0559d8967475fd8491a768a74d043bf71d89996
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
