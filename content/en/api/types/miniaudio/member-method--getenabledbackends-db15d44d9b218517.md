---
title: "MiniAudioContext.RawApi — Method: GetEnabledBackends"
description: "Exact Method: GetEnabledBackends contracts in MiniAudioContext.RawApi."
uid: api.inno.native.miniaudio.db15d44d9b218517
kind: api
owners:
  - Inno.Native.MiniAudio
apiSurface: source-clr
contracts:
  - project.inno-native-miniaudio#native-lifetime-contract
  - api.inno.native.miniaudio.303e581c9f4a4376#type-declaration
---
# `MiniAudioContext.RawApi`: Method: GetEnabledBackends

Read these exact member contracts together with the [containing type](miniaudiocontext.rawapi.md) and its [shared ownership contract](../../projects/inno-native-miniaudio.md#native-lifetime-contract).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetEnabledBackends`

<a id="api-e7b60d21d5a0e783"></a>
<!-- api: M:Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetEnabledBackends(Inno.Native.MiniAudio.MaBackend*,System.UInt64,System.UInt64*) 6ec29918224884dbe9fac09edd3288aa616e73b53928bc621eaefda459254d00 -->

```csharp
public Inno.Native.MiniAudio.MaResult Inno.Native.MiniAudio.MiniAudioContext.RawApi.GetEnabledBackends(Inno.Native.MiniAudio.MaBackend* pBackends, ulong backendCap, ulong* pBackendCount)
```

Retrieves compile-time enabled backends.

### Parameters

pBackends (out, optional)
A pointer to the buffer that will receive the enabled backends. Set to NULL to retrieve the backend count. Setting
the capacity of the buffer to `MA_BACKEND_COUNT` will guarantee it's large enough for all backends.
backendCap (in)
The capacity of the `pBackends` buffer.
pBackendCount (out)
A pointer to the variable that will receive the enabled backend count.

### Return Value

MA_SUCCESS if successful.
MA_INVALID_ARGS if `pBackendCount` is NULL.
MA_NO_SPACE if the capacity of `pBackends` is not large enough.
If `MA_NO_SPACE` is returned, the `pBackends` buffer will be filled with `*pBackendCount` values.

### Thread Safety

Safe.

### Callback Safety

Safe.

### Remarks

If you want to retrieve the number of backends so you can determine the capacity of `pBackends` buffer, you can call
this function with `pBackends` set to NULL.
This will also enumerate the null backend. If you don't want to include this you need to check for `ma_backend_null`
when you enumerate over the returned backends and handle it appropriately. Alternatively, you can disable it at
compile time with `MA_NO_NULL`.
The returned backends are determined based on compile time settings, not the platform it's currently running on. For
example, PulseAudio will be returned if it was enabled at compile time, even when the user doesn't actually have
PulseAudio installed.

### Example 1

The example below retrieves the enabled backend count using a fixed sized buffer allocated on the stack. The buffer is
given a capacity of `MA_BACKEND_COUNT` which will guarantee it'll be large enough to store all available backends.
Since `MA_BACKEND_COUNT` is always a relatively small value, this should be suitable for most scenarios.
```
ma_backend enabledBackends[MA_BACKEND_COUNT];
size_t enabledBackendCount;
result = ma_get_enabled_backends(enabledBackends, MA_BACKEND_COUNT,
&enabledBackendCount
);
if (result != MA_SUCCESS) {
// Failed to retrieve enabled backends. Should never happen in this example since all inputs are valid.
}
```

### See Also

ma_is_backend_enabled()

**Parameter `pBackends`:** Native parameter.

**Parameter `backendCap`:** Native parameter.

**Parameter `pBackendCount`:** Native parameter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/backends/MiniAudio/native/Inno.Native.MiniAudio/Generated/Bindings.cs#L12330).
