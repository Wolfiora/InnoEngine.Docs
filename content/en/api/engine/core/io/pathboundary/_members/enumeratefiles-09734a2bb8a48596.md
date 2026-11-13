---
uid: api.09734a2bb8a48596fa1393374855bfbaeaa02a17f75c714b2db9116507b13846
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.PathBoundary.EnumerateFiles(System.String)"
source: xml
reviewed: 9841e1892b8c08f97b62783078c76a57d01aac25090af75e4231ae50e25eb759
title: "EnumerateFiles"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Enumerates regular files in an owned tree without following filesystem links.

**Parameter `root`:** The existing physical root whose files and subdirectories belong to the caller.

**Returns:** Absolute file paths in unspecified order; enumeration does not retain open file handles.

**Exception `T:System.IO.IOException`:** The root or any entry is a symbolic link, junction or other reparse point, or cannot be inspected.

**Exception `T:System.IO.DirectoryNotFoundException`:** The root does not exist.
