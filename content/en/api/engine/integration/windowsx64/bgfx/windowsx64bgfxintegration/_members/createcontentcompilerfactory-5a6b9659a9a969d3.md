---
uid: api.5a6b9659a9a969d31c85833a563581fc4f9758ed277e31db465f5b422459d61b
symbol: "engine:Inno.Integration.WindowsX64.Bgfx:M:Inno.Integration.WindowsX64.Bgfx.WindowsX64BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner)"
source: xml
reviewed: 6e97b0787417d1a59a7abc2cef4c4289bcc4ef59d769ba6165b3f8325f27e31e
title: "CreateContentCompilerFactory"
kind: api
owners: [Inno.Integration.WindowsX64.Bgfx]
apiSurface: source-clr
---

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Exception `T:System.ArgumentNullException`:** The selected tools are null.
