---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.37bf0f1954af416787b34098201e9b6853d354a5c24677a22558b8b1f3971d73
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.PathBoundary.RequireUnlinkedPath(System.String,System.String)
title: PathBoundary.RequireUnlinkedPath
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: d6be1603e85ac1c8f3f2e5ec11530db8a1d20b94f828cb8b2b9800f2d302c18f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The trusted ownership root, which may not exist yet.

**Parameter `path`:** The absolute existing or future path beneath that root.

## Returns

The normalized contained path after every existing entry from the root has been inspected.

## Exceptions

**Exception `T:System.IO.IOException`:** The path escapes the boundary or an existing entry is a link or reparse point.

## Remarks

This validates the observed filesystem state. Concurrent mutations require an owner lease; it does not grant protection against unrelated actors replacing paths after validation.
