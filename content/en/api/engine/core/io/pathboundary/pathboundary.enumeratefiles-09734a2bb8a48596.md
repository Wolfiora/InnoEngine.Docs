---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.09734a2bb8a48596fa1393374855bfbaeaa02a17f75c714b2db9116507b13846
symbol: engine:Inno.Core.IO:M:Inno.Core.IO.PathBoundary.EnumerateFiles(System.String)
title: PathBoundary.EnumerateFiles
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: 894d66a41801e1d6ad0a3ae1353f1d8519dc947c1fd9b58cbab023f9e5f4d878
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
