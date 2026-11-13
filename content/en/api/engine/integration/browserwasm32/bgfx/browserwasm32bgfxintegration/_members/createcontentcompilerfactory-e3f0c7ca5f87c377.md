---
uid: api.e3f0c7ca5f87c37744d0b01ed8850795ed1aa021fd12d8f9be2f2c4321d53d2c
symbol: "engine:Inno.Integration.BrowserWasm32.Bgfx:M:Inno.Integration.BrowserWasm32.Bgfx.BrowserWasm32BgfxIntegration.CreateContentCompilerFactory(Inno.Build.Toolchains.Bgfx.Tools.ToolRunner)"
source: xml
reviewed: b1708caa245953c081a0ff1017cc6c14a199d2797348d11688dbd770136e3035
title: "CreateContentCompilerFactory"
kind: api
owners: [Inno.Integration.BrowserWasm32.Bgfx]
apiSurface: source-clr
---

Creates the scoped content factory using the caller's protected offline tool deployment.

**Parameter `tools`:** The borrowed executables and shader includes, retained through every compiler created by this factory.

**Returns:** A factory borrowing current authoring services without owning them or the selected tools.

**Exception `T:System.ArgumentNullException`:** The selected tools are null.
