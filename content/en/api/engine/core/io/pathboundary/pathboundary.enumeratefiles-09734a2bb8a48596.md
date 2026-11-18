---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.09734a2bb8a48596fa1393374855bfbaeaa02a17f75c714b2db9116507b13846
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.PathBoundary.EnumerateFiles(System.String)
title: PathBoundary.EnumerateFiles
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: f16d1a1929fd86984ec8729ed426a7df4db600b61a1073eeeca284bd773e8eb1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `root`:** The existing physical root whose files and subdirectories belong to the caller.

## Returns

Absolute file paths in unspecified order; enumeration does not retain open file handles.

## Exceptions

**Exception `T:System.IO.IOException`:** The root or any entry is a symbolic link, junction or other reparse point, or cannot be inspected.

**Exception `T:System.IO.DirectoryNotFoundException`:** The root does not exist.
