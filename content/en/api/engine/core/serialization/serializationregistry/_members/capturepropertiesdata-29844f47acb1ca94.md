---
uid: api.29844f47acb1ca94e7a080075b5b2997c2270c6b51c6539fff2ec7e5ac68a427
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.CapturePropertiesData(Inno.Core.Serialization.ISerializable,Inno.Core.Serialization.SerializationContext)"
source: xml
reviewed: 722787364ac3363c23d62a80555daa96abf8f39675c19be724f27aab47a7fe2e
title: "CapturePropertiesData"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Captures every persistent property as neutral bytes without serializing the owning object graph.

**Parameter `value`:** The serializable object whose persistent properties should be captured.

**Parameter `context`:** Optional immutable converter context.

**Returns:** Strictly validated bytes containing independently encoded property values.

**Exception `T:System.ArgumentNullException`:** Thrown when `value` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the manager is not initialized.
