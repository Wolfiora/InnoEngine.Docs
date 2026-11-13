---
uid: api.2d3278003993eac94e6edcefc437c9441dd0e3697385704ad0d0bcbcf5dd2ab8
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildCaches.CreateOwners(System.String,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor})"
source: xml
reviewed: deb558991c7156b66b60077769f3a7bab9b3c999088f8bfeb08f25eb20d0703a
title: "CreateOwners"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Registers exact Native, binding and Support Pack ownership recorded by their publishers. Unrecorded directories remain outside the cleanup authority.

**Parameter `engineRoot`:** The absolute engine checkout containing the artifact roots.

**Parameter `components`:** The actual registered component owners; shared toolchain roots are registered once.

**Returns:** Immutable owner registrations with current-generation and transitive dependency protection.

**Exception `T:System.ArgumentException`:** The root is blank or relative.
