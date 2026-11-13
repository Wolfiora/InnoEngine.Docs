---
uid: api.00bab1348e9133a4880c6191c5e90db941b3fea8de5e018277a3ee9e445d50da
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.#ctor(Inno.Content.IRuntimeContentStore,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: e744a26a70a989b08d384a7945bd1ad02311c5ce1227ac08ebbe85d4558771f9
title: "Constructor"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Creates a provider borrowing one source-free content store.

**Parameter `content`:** The verified immutable content store, borrowed for this provider's lifetime.

**Exception `T:System.ArgumentNullException`:** A required content or serialization service is null.

**Parameter `serialization`:** The runtime owner serialization registry.

**Parameter `context`:** Complete runtime asset/reference context used to resolve captured texture defaults.
