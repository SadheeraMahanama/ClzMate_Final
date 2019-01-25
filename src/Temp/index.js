import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";

const data = [
    { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
    { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
    { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:11 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:12 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:13 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:14 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:16 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:17 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:18 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:19 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:20 PM', date: '1 Jan 2018' },
    { name: 'Fattah', status: 'Active', time: '8:21 PM', date: '1 Jan 2018' },
    {
      name: 'Muhyiddeen',
      status: 'Blocked',
      time: '10:10 PM',
      date: '9 Feb 2018',
    },
  ];

  
class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [
        { name: 'Fattah', status: 'Active', time: '8:10 PM', date: '1 Jan 2018' },
        { name: 'Syah', status: 'Active', time: '9:14 PM', date: '1 Dec 2018' },
        { name: 'Izzat', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:11 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:12 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:13 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:14 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:15 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:16 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:17 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:18 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:19 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:20 PM', date: '1 Jan 2018' },
        { name: 'Fattah', status: 'Active', time: '8:21 PM', date: '1 Jan 2018' },
        {
          name: 'Muhyiddeen',
          status: 'Blocked',
          time: '10:10 PM',
          date: '9 Feb 2018',
        },

      ],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

//   componentDidMount() {
//     this.makeRemoteRequest();
//   }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        // this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        // this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
        // data={data}
          renderItem={({ item }) => (
            // <ListItem
            //   roundAvatar
            //   title={`${item.name.first} ${item.name.last}`}
            //   subtitle={item.email}
            //   avatar={{ uri: item.picture.thumbnail }}
            //   containerStyle={{ borderBottomWidth: 0 }}
            // />
            <ListItem
            roundAvatar
            title={item.name}
            subtitle={item.status}

            // time={item.time}   
            // date={item.date}        
            // avatar={{ uri: item.picture.thumbnail }}
            containerStyle={{ borderBottomWidth: 0 }}
          />
          )}
        //   keyExtractor={item => item.email}
        keyExtractor={item => item.time}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}

export default Temp;