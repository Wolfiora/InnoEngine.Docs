---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b325fcc45dbd2b55e9ee9b88fdbab3daea7ed9a7f8b849664d6a76cd6251ab1b
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.Parse(System.String)
title: RenderShaderVariant.Parse
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: bd07f9609a4897f5d9c0f9cd406b8acf0e389422b5e1d2341a2075e5e79d6ee7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The canonical semicolon-separated keyword selections.

## Returns

The validated shader variant represented by `value`.

## Exceptions

**Exception `T:System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.
