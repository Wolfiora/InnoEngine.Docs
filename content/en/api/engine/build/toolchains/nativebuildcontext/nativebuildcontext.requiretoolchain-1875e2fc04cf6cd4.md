---
uid: api.1875e2fc04cf6cd4554d846d524f9d1d9e258d2fa95ca648e35fc7604a8ecc34
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireToolchain"
source: xml
reviewed: a6db4e5ecd7e7fa8e63671e70b38485c37fb85adc8dc19d81cec271679a0390b
title: "NativeBuildContext.RequireToolchain"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requires an explicit selection before a component can build or start a native tool.

**Returns:** The already frozen tool selection without performing discovery.

**Exception `T:System.InvalidOperationException`:** Composition has not resolved a toolchain.
