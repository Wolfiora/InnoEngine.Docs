---
uid: api.8ba16fcbee6ad532e487b1140eb4ff622745ff807eec963771cc5a5688660f80
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBuildContext.RequireBindings(Inno.Build.Toolchains.NativeComponentDescriptor)"
source: xml
reviewed: 4c1899fff2833d49ae89ba2bc8a7516a978deb9ef3e5c87551ac749b1a64c2f7
title: "RequireBindings"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requires the target binding generation prepared for an explicitly declared Native owner.

**Parameter `component`:** The component whose facade and managed binding share one generation.

**Returns:** The immutable completed generation descriptor.

**Exception `T:System.InvalidOperationException`:** The owner has no prepared generation in this operation.

**Exception `T:System.ObjectDisposedException`:** The caller released the borrowed binding result before this operation finished.
