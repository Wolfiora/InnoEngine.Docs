---
uid: api.f9de4bf2086cac0b26eabaac6b7ee1c76eabf1be48bb30150317e947716a40c0
symbol: "engine:Inno.Build.BrowserWasm32:M:Inno.Build.BrowserWasm32.BrowserWasm32PlayerSupportPackSource.#ctor(Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId,Inno.Build.Composition.NativeProductContribution,Inno.Build.Toolchains.INativeBindingGenerator,Inno.Build.IPlayerSupportPackValidator)"
source: xml
reviewed: 596f89f81c39904a6627a821e26875a8e2499a424bc2c03920c9b03386156505
title: "Constructor"
kind: api
owners: [Inno.Build.BrowserWasm32]
apiSurface: source-clr
---

Captures independent Browser product and offline compiler selections.

**Parameter `host`:** The execution machine permitted to run the selected SDK.

**Parameter `toolsTarget`:** The explicit target of offline tools used while preparing the product.

**Parameter `nativePlan`:** The borrowed immutable Player component closure.

**Parameter `bindingGenerator`:** The borrowed generation service used by the Browser component batch.

**Parameter `supportPackValidator`:** The borrowed platform and selected static-closure validator.

**Exception `T:System.ArgumentNullException`:** The host or native plan is null.

**Exception `T:System.ArgumentException`:** The offline tool target is unassigned.
