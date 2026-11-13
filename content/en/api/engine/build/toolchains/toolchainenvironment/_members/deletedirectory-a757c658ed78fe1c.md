---
uid: api.a757c658ed78fe1cd1cb6f49d2ebb123bda504c8133acec137677183063b4ed8
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.DeleteDirectory(System.String)"
source: xml
reviewed: 6d01c5c11613d30f6b1595ccaa1c2054b9e7618fa44b0bb6c2d7dfc6ee940a3d
title: "DeleteDirectory"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Deletes one explicitly resolved toolchain output directory when it exists.

**Parameter `path`:** The exact directory selected by a toolchain command.

**Exception `T:System.ArgumentException`:** Thrown when `path` is empty or does not resolve to an absolute path.
