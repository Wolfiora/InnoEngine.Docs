---
uid: api.63e3af85e8ffcaaaa477fb174967e5489ba1b698e8cf6ee1f990dc1e6098716a
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.PhysicalPathResolver.Resolve(System.String)"
source: xml
reviewed: 22241693eda6d3bcac90839b9ac3dac27de3c28ec1ab6051d49051f3a9b7b11d
title: "PhysicalPathResolver.Resolve"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Resolves existing link components and retains their observed physical spelling for this phase.

**Parameter `path`:** The file or directory to inspect; relative paths use the current working directory.

**Returns:** The observed physical path, without creating files or relaxing an ownership boundary.

**Exception `T:System.ArgumentException`:** The path is empty or invalid.

**Exception `T:System.IO.FileNotFoundException`:** A required filesystem entry is missing.

**Exception `T:System.IO.DirectoryNotFoundException`:** A required parent directory is missing.

**Exception `T:System.IO.IOException`:** A link is cyclic or cannot be resolved.

**Exception `T:System.UnauthorizedAccessException`:** Filesystem metadata or a link target cannot be read with the current permissions.
