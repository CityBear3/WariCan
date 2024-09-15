// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: group/group.proto

package groupApi

import (
	common "github.com/CityBear3/WariCan/protobuf/common"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GroupCreateV1 struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GroupCreateV1) Reset() {
	*x = GroupCreateV1{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupCreateV1) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupCreateV1) ProtoMessage() {}

func (x *GroupCreateV1) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupCreateV1.ProtoReflect.Descriptor instead.
func (*GroupCreateV1) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{0}
}

type GroupGetV1 struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GroupGetV1) Reset() {
	*x = GroupGetV1{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupGetV1) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupGetV1) ProtoMessage() {}

func (x *GroupGetV1) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupGetV1.ProtoReflect.Descriptor instead.
func (*GroupGetV1) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{1}
}

type GroupCreateV1_Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string                  `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description string                  `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Members     []*GroupCreateV1_Member `protobuf:"bytes,3,rep,name=members,proto3" json:"members,omitempty"`
}

func (x *GroupCreateV1_Request) Reset() {
	*x = GroupCreateV1_Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupCreateV1_Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupCreateV1_Request) ProtoMessage() {}

func (x *GroupCreateV1_Request) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupCreateV1_Request.ProtoReflect.Descriptor instead.
func (*GroupCreateV1_Request) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{0, 0}
}

func (x *GroupCreateV1_Request) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupCreateV1_Request) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GroupCreateV1_Request) GetMembers() []*GroupCreateV1_Member {
	if x != nil {
		return x.Members
	}
	return nil
}

type GroupCreateV1_Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupId     string              `protobuf:"bytes,1,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	Name        string              `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description string              `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Members     []*common.UserModel `protobuf:"bytes,4,rep,name=members,proto3" json:"members,omitempty"`
}

func (x *GroupCreateV1_Response) Reset() {
	*x = GroupCreateV1_Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupCreateV1_Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupCreateV1_Response) ProtoMessage() {}

func (x *GroupCreateV1_Response) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupCreateV1_Response.ProtoReflect.Descriptor instead.
func (*GroupCreateV1_Response) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{0, 1}
}

func (x *GroupCreateV1_Response) GetGroupId() string {
	if x != nil {
		return x.GroupId
	}
	return ""
}

func (x *GroupCreateV1_Response) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupCreateV1_Response) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GroupCreateV1_Response) GetMembers() []*common.UserModel {
	if x != nil {
		return x.Members
	}
	return nil
}

type GroupCreateV1_Member struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *GroupCreateV1_Member) Reset() {
	*x = GroupCreateV1_Member{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupCreateV1_Member) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupCreateV1_Member) ProtoMessage() {}

func (x *GroupCreateV1_Member) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupCreateV1_Member.ProtoReflect.Descriptor instead.
func (*GroupCreateV1_Member) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{0, 2}
}

func (x *GroupCreateV1_Member) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type GroupGetV1_Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupId string `protobuf:"bytes,1,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
}

func (x *GroupGetV1_Request) Reset() {
	*x = GroupGetV1_Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupGetV1_Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupGetV1_Request) ProtoMessage() {}

func (x *GroupGetV1_Request) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupGetV1_Request.ProtoReflect.Descriptor instead.
func (*GroupGetV1_Request) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{1, 0}
}

func (x *GroupGetV1_Request) GetGroupId() string {
	if x != nil {
		return x.GroupId
	}
	return ""
}

type GroupGetV1_Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GroupId       string                      `protobuf:"bytes,1,opt,name=group_id,json=groupId,proto3" json:"group_id,omitempty"`
	Name          string                      `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Description   string                      `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Members       []*GroupGetV1_Member        `protobuf:"bytes,4,rep,name=members,proto3" json:"members,omitempty"`
	SplitBillings []*common.SplitBillingModel `protobuf:"bytes,5,rep,name=split_billings,json=splitBillings,proto3" json:"split_billings,omitempty"`
}

func (x *GroupGetV1_Response) Reset() {
	*x = GroupGetV1_Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupGetV1_Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupGetV1_Response) ProtoMessage() {}

func (x *GroupGetV1_Response) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupGetV1_Response.ProtoReflect.Descriptor instead.
func (*GroupGetV1_Response) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{1, 1}
}

func (x *GroupGetV1_Response) GetGroupId() string {
	if x != nil {
		return x.GroupId
	}
	return ""
}

func (x *GroupGetV1_Response) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GroupGetV1_Response) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *GroupGetV1_Response) GetMembers() []*GroupGetV1_Member {
	if x != nil {
		return x.Members
	}
	return nil
}

func (x *GroupGetV1_Response) GetSplitBillings() []*common.SplitBillingModel {
	if x != nil {
		return x.SplitBillings
	}
	return nil
}

type GroupGetV1_Member struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
}

func (x *GroupGetV1_Member) Reset() {
	*x = GroupGetV1_Member{}
	if protoimpl.UnsafeEnabled {
		mi := &file_group_group_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GroupGetV1_Member) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GroupGetV1_Member) ProtoMessage() {}

func (x *GroupGetV1_Member) ProtoReflect() protoreflect.Message {
	mi := &file_group_group_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GroupGetV1_Member.ProtoReflect.Descriptor instead.
func (*GroupGetV1_Member) Descriptor() ([]byte, []int) {
	return file_group_group_proto_rawDescGZIP(), []int{1, 2}
}

func (x *GroupGetV1_Member) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

var File_group_group_proto protoreflect.FileDescriptor

var file_group_group_proto_rawDesc = []byte{
	0x0a, 0x11, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x11, 0x77, 0x61, 0x72, 0x69, 0x63, 0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x1a, 0x11, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x75,
	0x73, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1a, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x2d, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc2, 0x02, 0x0a, 0x0d, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x31, 0x1a, 0x82, 0x01, 0x0a, 0x07, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x41, 0x0a, 0x07, 0x6d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x77, 0x61, 0x72,
	0x69, 0x63, 0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x31, 0x2e, 0x4d, 0x65, 0x6d,
	0x62, 0x65, 0x72, 0x52, 0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x1a, 0x88, 0x01, 0x0a,
	0x08, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x72, 0x6f,
	0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x67, 0x72, 0x6f,
	0x75, 0x70, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2b, 0x0a, 0x07, 0x6d, 0x65,
	0x6d, 0x62, 0x65, 0x72, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x11, 0x2e, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x55, 0x73, 0x65, 0x72, 0x4d, 0x6f, 0x64, 0x65, 0x6c, 0x52, 0x07,
	0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x1a, 0x21, 0x0a, 0x06, 0x4d, 0x65, 0x6d, 0x62, 0x65,
	0x72, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x22, 0xb5, 0x02, 0x0a, 0x0a, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x47, 0x65, 0x74, 0x56, 0x31, 0x1a, 0x24, 0x0a, 0x07, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x19, 0x0a, 0x08, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x1a,
	0xdd, 0x01, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x19, 0x0a, 0x08,
	0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x67, 0x72, 0x6f, 0x75, 0x70, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3e, 0x0a,
	0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24,
	0x2e, 0x77, 0x61, 0x72, 0x69, 0x63, 0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72, 0x6f,
	0x75, 0x70, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x47, 0x65, 0x74, 0x56, 0x31, 0x2e, 0x4d, 0x65,
	0x6d, 0x62, 0x65, 0x72, 0x52, 0x07, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x73, 0x12, 0x40, 0x0a,
	0x0e, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x5f, 0x62, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73, 0x18,
	0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x53,
	0x70, 0x6c, 0x69, 0x74, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x4d, 0x6f, 0x64, 0x65, 0x6c,
	0x52, 0x0d, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x42, 0x69, 0x6c, 0x6c, 0x69, 0x6e, 0x67, 0x73, 0x1a,
	0x21, 0x0a, 0x06, 0x4d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x32, 0xc4, 0x01, 0x0a, 0x05, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x61, 0x0a, 0x08,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x31, 0x12, 0x28, 0x2e, 0x77, 0x61, 0x72, 0x69, 0x63,
	0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x56, 0x31, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x29, 0x2e, 0x77, 0x61, 0x72, 0x69, 0x63, 0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x56, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x58, 0x0a, 0x05, 0x47, 0x65, 0x74, 0x56, 0x31, 0x12, 0x25, 0x2e, 0x77, 0x61, 0x72, 0x69, 0x63,
	0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x2e, 0x47, 0x72, 0x6f,
	0x75, 0x70, 0x47, 0x65, 0x74, 0x56, 0x31, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x26, 0x2e, 0x77, 0x61, 0x72, 0x69, 0x63, 0x61, 0x6e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x67, 0x72,
	0x6f, 0x75, 0x70, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x47, 0x65, 0x74, 0x56, 0x31, 0x2e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x43, 0x69, 0x74, 0x79, 0x42, 0x65, 0x61, 0x72,
	0x33, 0x2f, 0x57, 0x61, 0x72, 0x69, 0x43, 0x61, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x3b, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x41, 0x70,
	0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_group_group_proto_rawDescOnce sync.Once
	file_group_group_proto_rawDescData = file_group_group_proto_rawDesc
)

func file_group_group_proto_rawDescGZIP() []byte {
	file_group_group_proto_rawDescOnce.Do(func() {
		file_group_group_proto_rawDescData = protoimpl.X.CompressGZIP(file_group_group_proto_rawDescData)
	})
	return file_group_group_proto_rawDescData
}

var file_group_group_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_group_group_proto_goTypes = []any{
	(*GroupCreateV1)(nil),            // 0: warican.api.group.GroupCreateV1
	(*GroupGetV1)(nil),               // 1: warican.api.group.GroupGetV1
	(*GroupCreateV1_Request)(nil),    // 2: warican.api.group.GroupCreateV1.Request
	(*GroupCreateV1_Response)(nil),   // 3: warican.api.group.GroupCreateV1.Response
	(*GroupCreateV1_Member)(nil),     // 4: warican.api.group.GroupCreateV1.Member
	(*GroupGetV1_Request)(nil),       // 5: warican.api.group.GroupGetV1.Request
	(*GroupGetV1_Response)(nil),      // 6: warican.api.group.GroupGetV1.Response
	(*GroupGetV1_Member)(nil),        // 7: warican.api.group.GroupGetV1.Member
	(*common.UserModel)(nil),         // 8: common.UserModel
	(*common.SplitBillingModel)(nil), // 9: common.SplitBillingModel
}
var file_group_group_proto_depIdxs = []int32{
	4, // 0: warican.api.group.GroupCreateV1.Request.members:type_name -> warican.api.group.GroupCreateV1.Member
	8, // 1: warican.api.group.GroupCreateV1.Response.members:type_name -> common.UserModel
	7, // 2: warican.api.group.GroupGetV1.Response.members:type_name -> warican.api.group.GroupGetV1.Member
	9, // 3: warican.api.group.GroupGetV1.Response.split_billings:type_name -> common.SplitBillingModel
	2, // 4: warican.api.group.Group.CreateV1:input_type -> warican.api.group.GroupCreateV1.Request
	5, // 5: warican.api.group.Group.GetV1:input_type -> warican.api.group.GroupGetV1.Request
	3, // 6: warican.api.group.Group.CreateV1:output_type -> warican.api.group.GroupCreateV1.Response
	6, // 7: warican.api.group.Group.GetV1:output_type -> warican.api.group.GroupGetV1.Response
	6, // [6:8] is the sub-list for method output_type
	4, // [4:6] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_group_group_proto_init() }
func file_group_group_proto_init() {
	if File_group_group_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_group_group_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*GroupCreateV1); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*GroupGetV1); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[2].Exporter = func(v any, i int) any {
			switch v := v.(*GroupCreateV1_Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[3].Exporter = func(v any, i int) any {
			switch v := v.(*GroupCreateV1_Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[4].Exporter = func(v any, i int) any {
			switch v := v.(*GroupCreateV1_Member); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[5].Exporter = func(v any, i int) any {
			switch v := v.(*GroupGetV1_Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[6].Exporter = func(v any, i int) any {
			switch v := v.(*GroupGetV1_Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_group_group_proto_msgTypes[7].Exporter = func(v any, i int) any {
			switch v := v.(*GroupGetV1_Member); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_group_group_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_group_group_proto_goTypes,
		DependencyIndexes: file_group_group_proto_depIdxs,
		MessageInfos:      file_group_group_proto_msgTypes,
	}.Build()
	File_group_group_proto = out.File
	file_group_group_proto_rawDesc = nil
	file_group_group_proto_goTypes = nil
	file_group_group_proto_depIdxs = nil
}
