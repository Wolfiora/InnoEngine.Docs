---
title: "OwnedReadStream"
description: "Reference for OwnedReadStream in Inno.Core.IO."
uid: api.inno.core.io.dceb4780149c0e51
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `OwnedReadStream`

This reference describes `OwnedReadStream` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.IO.Stream`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a5111cce5638a7a4) | Method |
| [`Dispose`](#api-6378a75066e63a2b) | Method |
| [`Flush`](#api-4cc2560470f9d4e2) | Method |
| [`Read`](#api-b2621c533f73ae26) | Method |
| [`Read`](#api-84dd3235004171d5) | Method |
| [`ReadAsync`](#api-ff10f8b11df504c1) | Method |
| [`ReadAsync`](#api-072812672a40878d) | Method |
| [`ReadByte`](#api-ed8c8fe02b614b53) | Method |
| [`Seek`](#api-c13da1e544a860e9) | Method |
| [`SetLength`](#api-06ad11dc269ac7aa) | Method |
| [`Write`](#api-44ad0d683b5fdd8b) | Method |
| [`CanRead`](#api-702d8f2b6fd9e965) | Property |
| [`CanSeek`](#api-12772094ae010f1d) | Property |
| [`CanWrite`](#api-7e19233d935b077f) | Property |
| [`Length`](#api-7fdc4f9a5da4a54d) | Property |
| [`Position`](#api-4bf51a842179227c) | Property |

## Type declaration

<a id="api-dceb4780149c0e51"></a>
<!-- api: T:Inno.Core.IO.OwnedReadStream 52e334ee89175723d0e0f4e8737a33ebe0cb08adc7e4f5411eddd1146e72b698 -->

```csharp
public sealed class Inno.Core.IO.OwnedReadStream : System.IO.Stream
```

Keeps an independent read stream and its lifetime pin owned together until both retire.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L11).

## `#ctor`

<a id="api-a5111cce5638a7a4"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.#ctor(System.IO.Stream,System.IDisposable) 5caff3ecde411c84839d5a6d491e94635829d7a82ec69c5d21524ad3bbe42137 -->

```csharp
public Inno.Core.IO.OwnedReadStream.OwnedReadStream(System.IO.Stream input, System.IDisposable owner)
```

Transfers a readable stream and its independent lifetime pin into this wrapper.

**Parameter `input`:** The owned readable stream; it is closed before its pin is released.

**Parameter `owner`:** The owned pin whose repeated disposal must safely retry unfinished retirement.

**Throws `System.ArgumentException`:** The stream is not readable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L30).

## `Dispose`

<a id="api-6378a75066e63a2b"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Dispose(System.Boolean) ec2c747c769fb8fdf94e2ac5e033255dfa4d373cb9dc6bbabf36bad373eb778e -->

```csharp
protected override void Inno.Core.IO.OwnedReadStream.Dispose(bool disposing)
```

Releases the unmanaged resources used by the `System.IO.Stream` and optionally releases the managed resources.

**Parameter `disposing`:** `true` to release both managed and unmanaged resources; `false` to release only unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L96).

## `Flush`

<a id="api-4cc2560470f9d4e2"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Flush 6871a040860c6b32c9cc4024465ec7809e9f9cf6df1f6740949e8f86b85ce984 -->

```csharp
public override void Inno.Core.IO.OwnedReadStream.Flush()
```

When overridden in a derived class, clears all buffers for this stream and causes any buffered data to be written to the underlying device.

**Throws `System.IO.IOException`:** An I/O error occurs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L85).

## `Read`

<a id="api-b2621c533f73ae26"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Read(System.Byte[],System.Int32,System.Int32) 54bac806a05986eb36478c1bb04c9c888d2e9ca5bf08b526e16c2fb16d02118e -->

```csharp
public override int Inno.Core.IO.OwnedReadStream.Read(byte[] buffer, int offset, int count)
```

When overridden in a derived class, reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read.

**Parameter `buffer`:** An array of bytes. When this method returns, the buffer contains the specified byte array with the values between `offset` and (`offset` + `count` - 1) replaced by the bytes read from the current source.

**Parameter `offset`:** The zero-based byte offset in `buffer` at which to begin storing the data read from the current stream.

**Parameter `count`:** The maximum number of bytes to be read from the current stream.

**Throws `System.ArgumentException`:** The sum of `offset` and `count` is larger than the buffer length.

**Throws `System.ArgumentNullException`:** `buffer` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Throws `System.IO.IOException`:** An I/O error occurs.

**Throws `System.NotSupportedException`:** The stream does not support reading.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The total number of bytes read into the buffer. This can be less than the number of bytes requested if that many bytes are not currently available, or zero (0) if `count` is 0 or the end of the stream has been reached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L58).

## `Read`

<a id="api-84dd3235004171d5"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Read(System.Span{System.Byte}) 1dc5a0ee0730d85311f2179cef727388f53c225dc2c04bf97226b480ddecd59a -->

```csharp
public override int Inno.Core.IO.OwnedReadStream.Read(System.Span<byte> buffer)
```

When overridden in a derived class, reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read.

**Parameter `buffer`:** A region of memory. When this method returns, the contents of this region are replaced by the bytes read from the current source.

**Returns:** The total number of bytes read into the buffer. This can be less than the size of the buffer if that many bytes are not currently available, or zero (0) if the buffer's length is zero or the end of the stream has been reached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L64).

## `ReadAsync`

<a id="api-ff10f8b11df504c1"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.ReadAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken) b1caaff9bc5cfb0708b298efc60601df0befc9ec198c189b23763399ca8b4614 -->

```csharp
public override System.Threading.Tasks.Task<int> Inno.Core.IO.OwnedReadStream.ReadAsync(byte[] buffer, int offset, int count, System.Threading.CancellationToken cancellationToken)
```

Asynchronously reads a sequence of bytes from the current stream, advances the position within the stream by the number of bytes read, and monitors cancellation requests.

**Parameter `buffer`:** The buffer to write the data into.

**Parameter `offset`:** The byte offset in `buffer` at which to begin writing data from the stream.

**Parameter `count`:** The maximum number of bytes to read.

**Parameter `cancellationToken`:** The token to monitor for cancellation requests. The default value is `System.Threading.CancellationToken.None`.

**Throws `System.ArgumentNullException`:** `buffer` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Throws `System.ArgumentException`:** The sum of `offset` and `count` is larger than the buffer length.

**Throws `System.NotSupportedException`:** The stream does not support reading.

**Throws `System.ObjectDisposedException`:** The stream has been disposed.

**Throws `System.InvalidOperationException`:** The stream is currently in use by a previous read operation.

**Throws `System.OperationCanceledException`:** The cancellation token was canceled. This exception is stored into the returned task.

**Returns:** A task that represents the asynchronous read operation. The value of the `TResult` parameter contains the total number of bytes read into the buffer. The result value can be less than the number of bytes requested if the number of bytes currently available is less than the requested number, or it can be 0 (zero) if `count` is 0 or if the end of the stream has been reached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L73).

## `ReadAsync`

<a id="api-072812672a40878d"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.ReadAsync(System.Memory{System.Byte},System.Threading.CancellationToken) c6a6cf00c2fdf65dfa28552b5cac33445379ce7a74dae17664e6d1ded431bfa7 -->

```csharp
public override System.Threading.Tasks.ValueTask<int> Inno.Core.IO.OwnedReadStream.ReadAsync(System.Memory<byte> buffer, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Asynchronously reads a sequence of bytes from the current stream, advances the position within the stream by the number of bytes read, and monitors cancellation requests.

**Parameter `buffer`:** The region of memory to write the data into.

**Parameter `cancellationToken`:** The token to monitor for cancellation requests. The default value is `System.Threading.CancellationToken.None`.

**Throws `System.OperationCanceledException`:** The cancellation token was canceled. This exception is stored into the returned task.

**Returns:** A task that represents the asynchronous read operation. The value of its ``System.Threading.Tasks.ValueTask`1.Result`` property contains the total number of bytes read into the buffer. The result value can be less than the length of the buffer if that many bytes are not currently available, or it can be 0 (zero) if the length of the buffer is 0 or if the end of the stream has been reached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L68).

## `ReadByte`

<a id="api-ed8c8fe02b614b53"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.ReadByte 5e13b77e5c793de96c113f3dd127c7a6d97769932dcbebf4798c59561b389e78 -->

```csharp
public override int Inno.Core.IO.OwnedReadStream.ReadByte()
```

Reads a byte from the stream and advances the position within the stream by one byte, or returns -1 if at the end of the stream.

**Throws `System.NotSupportedException`:** The stream does not support reading.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The unsigned byte cast to an `System.Int32`, or -1 if at the end of the stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L66).

## `Seek`

<a id="api-c13da1e544a860e9"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Seek(System.Int64,System.IO.SeekOrigin) a894996558f5cf94c0efdf0c6a646049e07ecdde2e778c214de645708bc63456 -->

```csharp
public override long Inno.Core.IO.OwnedReadStream.Seek(long offset, System.IO.SeekOrigin origin)
```

When overridden in a derived class, sets the position within the current stream.

**Parameter `offset`:** A byte offset relative to the `origin` parameter.

**Parameter `origin`:** A value of type `System.IO.SeekOrigin` indicating the reference point used to obtain the new position.

**Throws `System.IO.IOException`:** An I/O error occurs.

**Throws `System.NotSupportedException`:** The stream does not support seeking, such as if the stream is constructed from a pipe or console output.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The new position within the current stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L80).

## `SetLength`

<a id="api-06ad11dc269ac7aa"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.SetLength(System.Int64) c9f8a21dcea309a07e3af9fc1591dfcafa01d164ea7cec5f94f315dfc44006f4 -->

```csharp
public override void Inno.Core.IO.OwnedReadStream.SetLength(long value)
```

When overridden in a derived class, sets the length of the current stream.

**Parameter `value`:** The desired length of the current stream in bytes.

**Throws `System.IO.IOException`:** An I/O error occurs.

**Throws `System.NotSupportedException`:** The stream does not support both writing and seeking, such as if the stream is constructed from a pipe or console output.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L87).

## `Write`

<a id="api-44ad0d683b5fdd8b"></a>
<!-- api: M:Inno.Core.IO.OwnedReadStream.Write(System.Byte[],System.Int32,System.Int32) 004333b7e0b8a45d50b025f543823df59fa56855002f8b509ddcb7cb80e67b45 -->

```csharp
public override void Inno.Core.IO.OwnedReadStream.Write(byte[] buffer, int offset, int count)
```

When overridden in a derived class, writes a sequence of bytes to the current stream and advances the current position within this stream by the number of bytes written.

**Parameter `buffer`:** An array of bytes. This method copies `count` bytes from `buffer` to the current stream.

**Parameter `offset`:** The zero-based byte offset in `buffer` at which to begin copying bytes to the current stream.

**Parameter `count`:** The number of bytes to be written to the current stream.

**Throws `System.ArgumentException`:** The sum of `offset` and `count` is greater than the buffer length.

**Throws `System.ArgumentNullException`:** `buffer` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** `offset` or `count` is negative.

**Throws `System.IO.IOException`:** An I/O error occurred, such as the specified file cannot be found.

**Throws `System.NotSupportedException`:** The stream does not support writing.

**Throws `System.ObjectDisposedException`:** `System.IO.Stream.Write(System.Byte[],System.Int32,System.Int32)` was called after the stream was closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L89).

## `CanRead`

<a id="api-702d8f2b6fd9e965"></a>
<!-- api: P:Inno.Core.IO.OwnedReadStream.CanRead 15c5fa18463de3149e286226dad6d23032e7ef6d159b027e1743a7d1bd7af86d -->

```csharp
public override bool Inno.Core.IO.OwnedReadStream.CanRead { get; }
```

When overridden in a derived class, gets a value indicating whether the current stream supports reading.

**Returns:** `true` if the stream supports reading; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L43).

## `CanSeek`

<a id="api-12772094ae010f1d"></a>
<!-- api: P:Inno.Core.IO.OwnedReadStream.CanSeek 284fb08d402e3d8d0c35d670ffee2e4b125d6a541ea56fabc7807bd2111c6710 -->

```csharp
public override bool Inno.Core.IO.OwnedReadStream.CanSeek { get; }
```

When overridden in a derived class, gets a value indicating whether the current stream supports seeking.

**Returns:** `true` if the stream supports seeking; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L45).

## `CanWrite`

<a id="api-7e19233d935b077f"></a>
<!-- api: P:Inno.Core.IO.OwnedReadStream.CanWrite 5e4b025d19ff660525d818225d7a7b1329dc93a4c802d6b06969646132f98209 -->

```csharp
public override bool Inno.Core.IO.OwnedReadStream.CanWrite { get; }
```

When overridden in a derived class, gets a value indicating whether the current stream supports writing.

**Returns:** `true` if the stream supports writing; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L47).

## `Length`

<a id="api-7fdc4f9a5da4a54d"></a>
<!-- api: P:Inno.Core.IO.OwnedReadStream.Length e72c8859ea066722e27d7e49ab9061515a4194246ca58b7fd52804f264885d32 -->

```csharp
public override long Inno.Core.IO.OwnedReadStream.Length { get; }
```

When overridden in a derived class, gets the length in bytes of the stream.

**Throws `System.NotSupportedException`:** A class derived from `Stream` does not support seeking and the length is unknown.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** A long value representing the length of the stream in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L49).

## `Position`

<a id="api-4bf51a842179227c"></a>
<!-- api: P:Inno.Core.IO.OwnedReadStream.Position cd283fa4a2e1c0ebe65655bf5e7a87973abfb45f7428ae6fd5ab4052fd043bea -->

```csharp
public override long Inno.Core.IO.OwnedReadStream.Position { get; set; }
```

When overridden in a derived class, gets or sets the position within the current stream.

**Throws `System.IO.IOException`:** An I/O error occurs.

**Throws `System.NotSupportedException`:** The stream does not support seeking.

**Throws `System.ObjectDisposedException`:** Methods were called after the stream was closed.

**Returns:** The current position within the stream.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/OwnedReadStream.cs#L51).
