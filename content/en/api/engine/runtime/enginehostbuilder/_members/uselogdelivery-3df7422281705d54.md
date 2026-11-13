---
uid: api.3df7422281705d54a7e6a0df65795e6eb46f01ff70e87d01e0392be6a5bc4c0c
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseLogDelivery(Inno.Core.Logging.LogDeliveryMode)"
source: xml
reviewed: 1199bd248cfe34b5ae3a5416522b6e5768eef7686029bbb476f43db36b911146
title: "UseLogDelivery"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Selects the host router's delivery policy for host and session sinks.

**Parameter `deliveryMode`:** Background worker or inline producer-thread delivery.

**Returns:** This builder for fluent host composition.

**Exception `T:System.ArgumentOutOfRangeException`:** The policy is undefined.
