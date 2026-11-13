---
uid: api.64383d5989a227fadaa5343353f3d5ff1c047b1075e53b5b5e3d47e1cbfd18bc
symbol: "engine:Inno.Core.Serialization:F:Inno.Core.Serialization.PropertyVisibility.Readonly"
source: xml
reviewed: 3f4d69c73e39744d515d5e5702d073b4701231ff70253e16965b9f9a26f39a4a
title: "PropertyVisibility.Readonly"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Can serialize and deserialize, runtime can get but cannot set. Runtime set attempts should be rejected (see `M:Inno.Core.Serialization.SerializedProperty.SetValue(System.Object)` behavior).
