---
uid: api.c34928581b1c9a78d505b7009fe2ed28a2668b65a08856f8edcbedb9907b6c21
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.ResolveManagedHost(System.String)"
source: xml
reviewed: 0683f739041a4286ff10e1f2c1ac98315611f3c8a658429968c6a8650407143b
title: "ResolveManagedHost"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Resolves the managed SDK executable without selecting a native tool target or preparing a product.

**Parameter `dotnetHost`:** Explicit executable, or null to use DOTNET\_HOST\_PATH and then the currently loaded runtime's installation. Normal executable discovery is used only when there is no shared runtime installation.

**Returns:** The absolute existing managed SDK executable selected for this operation.

**Exception `T:System.IO.FileNotFoundException`:** The selected SDK executable is unavailable.

**Exception `T:System.PlatformNotSupportedException`:** No standard execution host is registered for this system and processor.
