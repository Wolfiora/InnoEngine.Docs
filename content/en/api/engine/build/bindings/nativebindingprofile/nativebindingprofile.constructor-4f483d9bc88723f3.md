---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4f483d9bc88723f360b32bec82003a424c195e6a118851d56483b8321e383e4a
symbol: engine:Inno.Build.Bindings:M:Inno.Build.Bindings.NativeBindingProfile.#ctor(System.String,BGCS.Configuration.TargetConfiguration,System.Nullable{BGCS.Core.Targets.ManagedRuntimeId},System.Collections.Generic.IEnumerable{System.String},System.Action{BGCS.BindingHostBuilder},System.Nullable{BGCS.Core.BindingImportMode})
title: NativeBindingProfile.Constructor
kind: api
owners:
- Inno.Build.Bindings
apiSurface: source-clr
reviewed: 243dc3c9b92829e5224d7209bbdacaef64bea640d938ff567af1ab761e2b165f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetId`:** The engine target identity that may consume this profile.

**Parameter `target`:** The official BGCS native target selection.

**Parameter `runtime`:** The official BGCS managed runtime selection.

**Parameter `inputPaths`:** Checkout-relative implementation inputs owned by this profile.

**Parameter `configureGenerator`:** An immutable platform-owned registration action for official BGCS extensions, or null for the standard SDK. The action must not capture mutable state; its implementation and extension assemblies participate in input identity.

**Parameter `importMode`:** The platform's official import mechanism, or null to preserve the component choice.

## Exceptions

**Exception `T:System.ArgumentException`:** An identity is empty, uses implicit host selection, or a path escapes the checkout.
