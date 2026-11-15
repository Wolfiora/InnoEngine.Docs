---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b325fcc45dbd2b55e9ee9b88fdbab3daea7ed9a7f8b849664d6a76cd6251ab1b
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.RenderShaderVariant.Parse(System.String)
title: RenderShaderVariant.Parse
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: 4c1f6345622f19c9d5c0074cdfa93183b6feff0c24603a79394c4772d9af830f

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Parses the canonical representation stored in a deployed artifact.

## Parameters

**Parameter `value`:** The canonical semicolon-separated keyword selections.

## Returns

The validated shader variant represented by `value`.

## Exceptions

**Exception `T:System.FormatException`:** Thrown when the representation is malformed, unordered, or contains duplicate keyword IDs.
