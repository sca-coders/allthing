Home = React.createClass({
   render() {
       return (
           <div className="ui container">
               <table className="ui celled table">
                   <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Correct Guesses</th>
                        </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>
                               <h4 className="ui image header">
                                   <i className="spy icon"></i>
                                   <div className="content">
                                       Lena
                                       <div className="sub header">Human Resources</div>
                                   </div>
                               </h4>
                           </td>
                           <td>22</td>
                       </tr>
                       <tr>
                           <td>
                               <h4 className="ui image header">
                                   <i className="user icon"></i>
                                   <div className="content">
                                       Matthew
                                       <div className="sub header">Fabric Design</div>
                                   </div>
                               </h4>
                           </td>
                           <td>15</td>
                       </tr>
                       <tr>
                           <td>
                               <h4 className="ui image header">
                                   <i className="bar icon"></i>
                                   <div className="content">
                                       Lindsay
                                       <div className="sub header">Entertainment</div>
                                   </div>
                               </h4>
                           </td>
                           <td>12</td>
                       </tr>
                       <tr>
                           <td>
                               <h4 className="ui image header">
                                   <i className="dollar icon"></i>
                                   <div className="content">
                                       Mark
                                       <div className="sub header">Executive</div>
                                   </div>
                               </h4>
                           </td>
                           <td>11</td>
                       </tr>
                   </tbody>
               </table>
           </div>
       )
   }
});
