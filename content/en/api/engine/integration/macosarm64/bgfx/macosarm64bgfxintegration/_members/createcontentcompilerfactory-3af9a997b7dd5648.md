---
uid: api.3af9a997b7dd5648eab8c308c89890ce7fb144bb63680ee04b8ea0ad9637fedc
symbol: "engine:Inno.Integration.MacOSArm64.Bgfx:M:Inno.Integration.MacOSArm64.Bgfx.MacOSArm64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner)"
source: xml
reviewed: d0e2db9b6a1d19cfd7369b203ddd567fca834696ccc89e7f547aea60be3015b7
title: "CreateContentCompilerFactory"
kind: api
owners: [Inno.Integration.MacOSArm64.Bgfx]
apiSurface: source-clr
---

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Exception `T:System.ArgumentNullException`:** The selected tools are null.
